import supabase from './supabase';

export default async function getFaq() {
  const { data: faq, error } = await supabase.from('faq').select('*');

  if (error) {
    console.error(error);
    throw new Error('error:', error);
  }

  return faq;
}

export async function getSpecificFaq(id) {
  const { data: faq, error } = await supabase
    .from('faq')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    throw new Error('error:', error);
  }

  return faq;
}

export async function createFaq(newProject) {
  const { data, error } = await supabase
    .from('faq')
    .insert([newProject])
    .select();

  if (error) throw new Error('Error creating Question');

  return data;
}

export async function editFaq(newProject, id) {
  const { data: editFaq, error } = await supabase
    .from('faq')
    .update(newProject)
    .eq('id', id)
    .select();

  if (error) {
    console.error(error);
    throw new Error('error:', error);
  }

  return editFaq;
}
