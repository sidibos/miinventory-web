import { redirect } from 'next/navigation'
 
export async function createUser(formData: FormData) {
  // Create a new post
  // ...
 
  // Redirect to the new post
  redirect('/users');
}