import { sql } from '@vercel/postgres'

export async function getRestaurants() {
  try {
    console.log('Fetching restaurants...')
    const { rows } = await sql`
      SELECT 
        r.*,
        COALESCE(SUM(CASE WHEN v.is_like = true THEN 1 ELSE 0 END), 0)::text as likes,
        COALESCE(SUM(CASE WHEN v.is_like = false THEN 1 ELSE 0 END), 0)::text as dislikes
      FROM restaurants r
      LEFT JOIN votes v ON r.id = v.restaurant_id
      GROUP BY r.id, r.name, r.position_x, r.position_y, r.created_at
      ORDER BY r.created_at ASC;
    `
    console.log('Fetched restaurants:', rows)
    return rows
  } catch (error) {
    console.error('Error fetching restaurants:', error)
    throw new Error('Failed to fetch restaurants')
  }
}

export async function addVote(restaurantId: number, cookieId: string, isLike: boolean | null) {
  try {
    console.log('Managing vote:', { restaurantId, cookieId, isLike })
    
    if (isLike === null) {
      // Delete the specific user's vote
      const { rows } = await sql`
        DELETE FROM votes 
        WHERE restaurant_id = ${restaurantId}
        AND cookie_id = ${cookieId}
        RETURNING *;
      `
      console.log('Vote removed:', rows[0])
      return rows[0]
    }
    
    // First delete any existing vote from this user for this restaurant
    await sql`
      DELETE FROM votes 
      WHERE restaurant_id = ${restaurantId}
      AND cookie_id = ${cookieId};
    `
    
    // Then add the new vote
    const { rows } = await sql`
      INSERT INTO votes (restaurant_id, cookie_id, is_like)
      VALUES (${restaurantId}, ${cookieId}, ${isLike})
      RETURNING *;
    `
    console.log('Vote added:', rows[0])
    return rows[0]
  } catch (error) {
    console.error('Error managing vote:', error)
    throw new Error('Failed to manage vote')
  }
} 