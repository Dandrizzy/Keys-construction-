import supabase from '../Services/supabase';

export const useCreateApi = ({ key }) => {
  async function create(newService) {
    // 1. Create/edit cabin
    const { data, error } = supabase
      .from(key)
      .insert([{ newService }])
      .select()
      .single();

    if (error) {
      console.error(error);
      throw new Error('services could not be created', error.message);
    }
    return data;
  }

  return { create };
};
