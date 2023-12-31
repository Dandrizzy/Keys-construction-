import supabase from './supabase';

export const getServices = async () => {
  const { data, error } = await supabase.from('services').select('*');

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return data;
};

export const getSpecificService = async (id) => {
  const { data: services, error } = await supabase
    .from('services')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw new Error(error);

  return services;
};

export async function createService(newService) {
  const { data, error } = await supabase
    .from('services')
    .insert([{ ...newService }])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('services could not be created', error.message);
  }

  return data;
}
export async function editService(newService, id) {
  const { data, error } = await supabase
    .from('services')
    .update({ ...newService })
    .eq('id', id)
    .select();

  if (error) {
    console.error(error.message);
    throw new Error('services could not be created', error.message);
  }

  return data;
}

export const deleteService = async (id) => {
  const { data, error } = await supabase.from('services').delete().eq('id', id);

  if (error) {
    throw new Error('Service could not be deleted', error.message);
  }

  return data;
};
