import supabase, { supabaseUrl } from './supabase';

export const getProject = async () => {
  const { data, error } = await supabase.from('project').select('*');

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return data;
};

export const getSpecificProject = async (id) => {
  const { data: project, error } = await supabase
    .from('project')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw new Error(error);

  return project;
};

export async function createEditProject(newProject, id) {
  const hasImagePath = newProject.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newProject.image.name}`
    .replaceAll('/', '')
    .replace('.', '');
  const imagePath = hasImagePath
    ? newProject.image
    : `${supabaseUrl}/storage/v1/object/public/project/${imageName}`;

  // 1. Create/edit cabin
  let query = supabase.from('project');

  // A) CREATE
  if (!id) query = query.insert([{ ...newProject, image: imagePath }]);

  // B) EDIT
  if (id)
    query = query
      .update({
        ...newProject,
        // image: imagePath
      })
      .eq('id', id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error.message);
    throw new Error('Cabin could not be created');
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from('project')
    .upload(imageName, newProject.image);

  // 3. Delete the cabin IF there was an error uploading image
  if (storageError) {
    await supabase.from('project').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error(
      'Project image could not be uploaded and the Project was not created'
    );
  }

  return data;
}

export const createProject = async (newProject) => {
  let random = Math.random();

  const { data, error } = await supabase
    .from('project')
    .insert([{ newProject }]);

  const imageName = `${random}-${newProject.image.name}`
    .replaceAll('/', '')
    .replace('.', '');
  const { error: storageError } = await supabase.storage
    .from('project')
    .upload(imageName, newProject.image);

  if (storageError) {
    await supabase.from('project').delete().eq('id', data.id);
    throw new Error(
      'project image could not be uploaded and the project was not created'
    );
  }
  if (error) throw new Error();
};

export async function deleteProject(id) {
  const { data, error } = supabase
    .from('project')
    .delete()
    .eq('id', id)
    .single();

  if (error) {
    throw new Error('Project could not be deleted');
  }

  return data;
}
