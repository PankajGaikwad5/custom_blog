export const getBlogById = async (id: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/${id}`,
      {
        method: 'GET',
        cache: 'no-store',
      }
    );
    if (!res.ok) {
      throw new Error('Failed to fetch blog');
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
