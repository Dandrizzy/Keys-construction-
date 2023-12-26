import supabase, { supabaseUrl } from './supabase';

export const getServices = async () => {
  const { data, error } = await supabase.from('service').select('*');

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return data;
};

export const getSpecificService = async (id) => {
  const { data: services, error } = await supabase
    .from('service')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw new Error(error);

  return services;
};

export async function createEditService(newService, id) {
  const hasImagePath = newService.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newService.image.name}`
    .replaceAll('/', '')
    .replace('.', '');
  const imagePath = hasImagePath
    ? newService.image
    : `${supabaseUrl}/storage/v1/object/public/service/${imageName}`;

  // 1. Create/edit cabin
  let query = supabase.from('service');

  // A) CREATE
  if (!id) query = query.insert([{ ...newService, image: imagePath }]);

  // B) EDIT
  if (id)
    query = query
      .update({
        ...newService,
        // image: imagePath
      })
      .eq('id', id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error.message);
    throw new Error('service could not be created', error.message);
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from('service')
    .upload(imageName, newService.image);

  // 3. Delete the cabin IF there was an error uploading image
  if (storageError) {
    await supabase.from('service').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error(
      'service image could not be uploaded and the service was not created'
    );
  }

  return data;
}

export const deleteService = async (id) => {
  const { data, error } = supabase.from('service').delete().eq('id', id);

  if (error) {
    throw new Error('Service could not be deleted', error.message);
  }

  return data;
};
