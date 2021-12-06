import { getItems, setItems } from "../../client";

export const createStuff = async (stuff) => {
  const stuffInfo = `
      mutation ($stuff: StuffInput!) {
        addStuff(stuff: $stuff) {
          id
          name
          description
          price{
              price1
              price2
              price3
              price4
              priceAdditional
            }
          photo
          category
        }
      }
    `;
  const result = await setItems(stuffInfo, {
    stuff,
  });
  return result.data.createStuff;
};

export const getAllStuff = async () => {
  const stuffInfo = `
      query {
        getAllStuff {
          items {
            id
            name
            description
            price{
              price1
              price2
              price3
              price4
              priceAdditional
            }
            photo
            category
          }
        }
      }
    `;

  const result = await getItems(stuffInfo);
  return result.data.getAllStuff.items;
};

export const getStuffById = async (id) => {
  const stuffInfo = `
      query ($id: ID!) {
        getStuffById(id: $id) {
          ... on Stuff {
            id
            name
            description
            price{
              price1
              price2
              price3
              price4
              priceAdditional
            }
            photo
            category
          }
        }
      }
    `;
  const result = await getItems(stuffInfo, { id });

  return result.data.getStuffById;
};

export const getStuffByCategory = async (category) => {
  const stuffInfo = `
      query ($category: String!) {
        getStuffByCategory(category: $category) {
          items {
            id
            name
            description
            price{
              price1
              price2
              price3
              price4
              priceAdditional
            }
            photo
            category
          }
        }
      }
    `;
  const result = await getItems(stuffInfo, { category });

  console.log(result);

  return result.data.getStuffByCategory.items;
};
