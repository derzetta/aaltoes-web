import { sql } from '@vercel/postgres'

export async function getRestaurants() {
  try {
    console.log('Fetching restaurants...')
    const { rows } = await sql.query(`
      SELECT 
        r.*,
        COALESCE(SUM(CASE WHEN v.is_like = true THEN 1 ELSE 0 END), 0) as likes,
        COALESCE(SUM(CASE WHEN v.is_like = false THEN 1 ELSE 0 END), 0) as dislikes
      FROM restaurants r
      LEFT JOIN votes v ON r.id = v.restaurant_id
      GROUP BY r.id, r.name, r.position_x, r.position_y, r.created_at
      ORDER BY r.created_at ASC;
    `)
    console.log('Fetched restaurants:', rows)
    return rows
  } catch (error: any) {
    console.error('Database Error:', error)
    throw new Error(`Failed to fetch restaurants: ${error.message || 'Unknown error'}`)
  }
}

export async function addVote(restaurantId: string, isLike: boolean) {
  try {
    console.log('Adding vote:', { restaurantId, isLike })
    await sql.query(`
      INSERT INTO votes (restaurant_id, is_like)
      VALUES ($1, $2);
    `, [restaurantId, isLike])
    console.log('Vote added successfully')
    return { success: true }
  } catch (error: any) {
    console.error('Database Error:', error)
    throw new Error(`Failed to add vote: ${error.message || 'Unknown error'}`)
  }
} 