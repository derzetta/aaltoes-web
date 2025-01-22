import { sql } from '@vercel/postgres'

export async function getRestaurants() {
  try {
    console.log('Fetching restaurants...')
    const { rows } = await sql`
      SELECT 
        r.*,
        COALESCE(SUM(CASE WHEN v.is_like = true THEN 1 ELSE 0 END), 0) as likes,
        COALESCE(SUM(CASE WHEN v.is_like = false THEN 1 ELSE 0 END), 0) as dislikes
      FROM restaurants r
      LEFT JOIN votes v ON r.id = v.restaurant_id
      GROUP BY r.id
      ORDER BY r.created_at ASC;
    `
    console.log('Fetched restaurants:', rows)
    return rows
  } catch (error) {
    console.error('Error fetching restaurants:', error)
    throw new Error('Failed to fetch restaurants')
  }
}

export async function addVote(restaurantId: number, isLike: boolean | null) {
  try {
    console.log('Managing vote:', { restaurantId, isLike })
    
    if (isLike === null) {
      // Delete the vote
      const { rows } = await sql`
        DELETE FROM votes 
        WHERE restaurant_id = ${restaurantId}
        RETURNING *;
      `
      console.log('Vote removed:', rows[0])
      return rows[0]
    }
    
    // Add/update vote - delete any existing vote first
    const { rows } = await sql`
      WITH deleted AS (
        DELETE FROM votes 
        WHERE restaurant_id = ${restaurantId}
      )
      INSERT INTO votes (restaurant_id, is_like)
      VALUES (${restaurantId}, ${isLike})
      RETURNING *;
    `
    console.log('Vote updated:', rows[0])
    return rows[0]
  } catch (error) {
    console.error('Error managing vote:', error)
    throw new Error('Failed to manage vote')
  }
} 