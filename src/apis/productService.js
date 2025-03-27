import axiosClient from './axiosClient';

const getProducts = async () => {
    const res = await axiosClient.get('/product');

    return res.data;

    console.log(res);
};

// const getProductSSS = async () => {
//     const res = await axiosClient.post('/api/product/search', {
//         cateCd: '',
//         comId: 'SSS',
//         key: '',
//         len: 8,
//         page: 0,
//         pathKind: 'PC',
//         userId: '',
//     });

//     return res.data;
// };

export { getProducts };
