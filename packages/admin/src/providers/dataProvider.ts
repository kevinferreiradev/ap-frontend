import { fetchUtils, DataProvider } from 'react-admin';
import { axiosInstance } from 'services/http';
import {
  CondOperator,
  QueryFilter,
  QuerySort,
  RequestQueryBuilder,
} from '@nestjsx/crud-request';
// TODO This is a uuid hack to filter works based on a uuid
import { validate as uuidValidate } from 'uuid';

const httpClient = fetchUtils.fetchJson;

const getMessage = (error: any) => {
  return "random message";


  const message =
    error.response && error.response.data && error.response.data.message;
  if (!message) {
    return error.response.statusText;
  }
  return typeof message !== 'string'
    ? error.response.data.message[0]
    : error.response.data.message;
};
const composeFilter = (paramsFilter: any): QueryFilter[] => {
  if (
    paramsFilter &&
    (paramsFilter === '' ||
      (typeof paramsFilter.q !== 'undefined' && paramsFilter.q === ''))
  ) {
    paramsFilter = {};
  }

  const flatFilter = fetchUtils.flattenObject(paramsFilter);
  return Object.keys(flatFilter).map(key => {
    const splitKey = key.split('||');

    let field = splitKey[0];
    let ops = splitKey[1];
    if (!ops) {
      if (
        typeof flatFilter[key] === 'number' ||
        typeof flatFilter[key] === 'boolean' ||
        (flatFilter[key].match && flatFilter[key].match(/^\d+$/)) ||
        uuidValidate(flatFilter[key])
      ) {
        ops = CondOperator.EQUALS;
      } else {
        ops = CondOperator.CONTAINS;
      }
    }

    if (field.startsWith('_') && field.includes('.')) {
      field = field.split(/\.(.+)/)[1];
    }
    return { field, operator: ops, value: flatFilter[key] } as QueryFilter;
  });
};

const USER_MOCK = [{
  "id": 1,
  "email": "User2@email.com",
  "username": "User 1",
  "firstName": "User 1",
  "lastName": "User 1",
  
},{
  "id": 2,
  "email": "User2@email.com",
  "username": "User2",
  "firstName": "User 2",
  "lastName": "User 2",
  
}];

const CATEGORY_MOCK = [{
  "id": 1,
  "image": "image.png",
  "code": "CAT_101",
  "description": "Eletronico"
},{
  "id": 2,
  "image": "image.png",
  "code": "CAT_102",
  "description": "Animal",
}];

const STATUS_MOCK = [{
  "id": 1,
  "code": "STS_100",
  "description": "Achado"
},{
  "id": 2,
  "code": "STS_101",
  "description": "Perdido",
  }];


const CITIES_MOCK = [{
  "id": 1,
  "code": "STS_100",
  "description": "João Pessoa"
},{
  "id": 2,
  "code": "STS_101",
  "description": "Campina Grande",
}];


const PARTNERS_MOCK = [{
  "id": 1,
  "code": "STS_100",
  "description": "Manaira Shopping"
},{
  "id": 2,
  "code": "STS_101",
  "description": "Mangabeira Shopping",
}];


export const dataProvider: DataProvider = {
  getList: (
    resource,
    //params
  ) =>
    new Promise((
      resolve
      //, reject
    ) => {
      
      let data: any[];
      
      console.log('STEP resource ', resource);
      if (resource === "user")
        data = USER_MOCK;
      
      if (resource === "category")
        data = CATEGORY_MOCK;
      
      if (resource === "status")
        data = STATUS_MOCK;
      
      if (resource === "cities")
        data = CITIES_MOCK;
      
      if (resource === "partners")
        data = PARTNERS_MOCK;

        
      
      
      //const newResource = resource === 'users' ? 'user' : resource;
      //console.log('STEP USER_MOCK', USER_MOCK);
      return new Promise(() =>
        resolve({
          data: data,
          total: 2
        })
      )
    

      // const newResource = resource === 'users' ? 'user' : resource;
      // const { page, perPage } = params.pagination;
      // const query = RequestQueryBuilder.create({
      //   filter: composeFilter(params.filter),
      // })
      //   .setLimit(perPage)
      //   .setPage(page)
      //   .sortBy(params.sort as QuerySort)
      //   .setOffset((page - 1) * perPage)
      //   .query();
      // const url = `${newResource}?${query}`;
      // return axiosInstance
      //   .get(url)
      //   .then(response =>
      //     resolve({
      //       data: response.data.data,
      //       total: response.data.total,
      //     }),
      //   )
      //   .catch(error => {
      //     const message = getMessage(error);

      //     error.message = message;
      //     return reject(error);
      //   });
  }),
  getOne: (resource, params) =>
    axiosInstance.get(`/${resource}/${params.id}`).then(response => ({
      data: response.data,
    })),
  getMany: (
  //  resource, params
  ) =>
    new Promise((
    //  resolve, reject
    ) => {
      return new Promise((resolve) =>
        resolve({
          data: USER_MOCK,
          total: 1
        })
      )
    }),
    // new Promise((resolve, reject) => {
    //   const query = RequestQueryBuilder.create()
    //     .setFilter({
    //       field: 'id',
    //       operator: CondOperator.IN,
    //       value: `${params.ids}`,
    //     })
    //     .query();
    //   const url = `${resource}?${query}`;

    //   return axiosInstance
    //     .get(url)
    //     .then(response =>
    //       resolve({
    //         data: response.data.data,
    //       }),
    //     )
    //     .catch(error => {
    //       const message = getMessage(error);

    //       error.message = message;
    //       return reject(error);
    //     });
    // }),
  getManyReference: (resource, params) =>
    new Promise((resolve, reject) => {
      const { page, perPage } = params.pagination;
      const filter: QueryFilter[] = composeFilter({});
      if (params.id && params.target) {
        filter.push({
          field: params.target,
          operator: CondOperator.EQUALS,
          value: params.id,
        });
      }

      const query = RequestQueryBuilder.create({
        filter,
      })
        .sortBy(params.sort as QuerySort)
        .setLimit(perPage)
        .setOffset((page - 1) * perPage)
        .query();

      const url = `${resource}?${query}`;
      return axiosInstance
        .get(url)
        .then(({ data }) =>
          resolve({
            data: data.data,
            total: data.total,
          }),
        )
        .catch(error => {
          const message = getMessage(error);

          error.message = message;
          return reject(error);
        });
    }),
  update: (resource, params) =>
    new Promise((resolve, reject) =>
      axiosInstance
        .patch(`${resource}/${params.id}`, params.data)
        .then(response =>
          resolve({
            data: response.data,
          }),
        )
        .catch(error => {
          const message = getMessage(error);

          error.message = message;
          return reject(error);
        }),
    ),
  updateMany: (resource, params) => {
    return httpClient(`${resource}`, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },
  create: (resource, params) =>
    new Promise((resolve, reject) =>
      axiosInstance
        .post(`${resource}`, params.data)
        .then(response =>
          resolve({
            data: response.data,
          }),
        )
        .catch(error => {
          const message = getMessage(error);

          error.message = message;
          return reject(error);
        }),
    ),
  delete: (resource, params) =>
    new Promise((resolve, reject) =>
      axiosInstance
        .delete(`${resource}/${params.id}`)
        .then(({ data }) => resolve({ data }))
        .catch(error => {
          const message = getMessage(error);

          error.message = message;
          return reject(error);
        }),
    ),
  deleteMany: (resource, params) => {
    return new Promise((resolve, reject) => {
      return Promise.all(
        params.ids.map(id => axiosInstance.delete(`${resource}/${id}`)),
      )
        .then(responses =>
          resolve({ data: responses.map(response => response.data) }),
        )
        .catch(error => {
          const message = getMessage(error);

          error.message = message;
          return reject(error);
        });
    });
  },
};

export default dataProvider;
