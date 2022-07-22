async function getData(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const result = await response.json();
    if (result) {
      return result;
    }
  } catch (err) {
    console.log(err);
  }
}

export const fetchPostByCategory = async (category, page) => {
  if (category > 0) {
    return getData(
      `https://aksioneri.com/wp-json/wp/v2/posts?categories=${category}&page=${page}&order=desc`
    );
  } else {
    return getData(
      `https://aksioneri.com/wp-json/wp/v2/posts?page=${page}&order=desc`
    );
  }
};

export const fetchCategories = async () => {
  return getData(`https://aksioneri.com/wp-json/wp/v2/categories?per_page=20`);
};

export const fetchPostsById = async (slug) => {
  return getData(
    `https://aksioneri.com/wp-json/wp/v2/posts?slug=${slug}&order=desc`
  );
};
