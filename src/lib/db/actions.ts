import { db } from './index';
import { silkwayApplications, type NewSilkwayApplication } from './schema';

/**
 * Submits a new Silkway application to the database
 */
export async function submitSilkwayApplication(data: Omit<NewSilkwayApplication, 'id' | 'createdAt'>) {
  try {
    // Insert the application into the database
    const result = await db.insert(silkwayApplications).values({
      name: data.name,
      email: data.email,
      project: data.project,
      about: data.about,
      chinaInterest: data.chinaInterest,
    }).returning();
    
    return { success: true, data: result[0] };
  } catch (error) {
    console.error('Error submitting Silkway application:', error);
    return { success: false, error: 'Failed to submit application' };
  }
} 