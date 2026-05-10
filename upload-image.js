// upload-image.js
const IMGBB_API_KEY = '85d8acf7f765f021b6c76dfae3650f53'; // ປ່ຽນທີ່ນີ້

export async function uploadImage(file) {
  const formData = new FormData();
  formData.append('image', file);
  const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
    method: 'POST',
    body: formData
  });
  const data = await res.json();
  if (data.success) {
    return data.data.url;
  } else {
    throw new Error('ອັບໂຫຼດບໍ່ສຳເລັດ');
  }
}