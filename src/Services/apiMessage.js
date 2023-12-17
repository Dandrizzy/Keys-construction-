import supabase from './supabase';

export async function getMessages() {
  const { data, error } = await supabase.from('messages').select('*');

  if (error) throw new Error('error:', error);

  return data;
}

export async function sendMessage(message) {
  const { data, error } = await supabase
    .from('messages')
    .insert([message])
    .select();

  if (error) {
    console.log(error.message);
    throw new Error('There was an error sending Message 📧');
  }

  console.log(data);

  return data;
}
