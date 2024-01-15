const axios = require('axios');

async function testCategories() {
  try {
    // Create category
    const createCategoryResponse = await axios.post('http://localhost:3000/categories', {
      name: 'TestCategory',
    });
    console.log('Created Category:', createCategoryResponse.data);

    const categoryId = createCategoryResponse.data.id;

    // Read category
    const getCategoryResponse = await axios.get(`http://localhost:3000/categories/${categoryId}`);
    console.log('Get Category:', getCategoryResponse.data);

    // Update category
    const updateCategoryResponse = await axios.put(`http://localhost:3000/categories/${categoryId}`, {
      name: 'UpdatedTestCategory',
    });
    console.log('Updated Category:', updateCategoryResponse.data);

    // Delete category
    const deleteCategoryResponse = await axios.delete(`http://localhost:3000/categories/${categoryId}`);
    console.log('Deleted Category:', deleteCategoryResponse.data);
  } catch (error) {
    console.error('Error testing categories:', error.response ? error.response.data : error.message);
  }
}

async function testSuppliers() {
  try {
    // Create supplier
    const createSupplierResponse = await axios.post('http://localhost:3000/suppliers', {
      name: 'TestSupplier',
    });
    console.log('Created Supplier:', createSupplierResponse.data);

    const supplierId = createSupplierResponse.data.id;

    // Read supplier
    const getSupplierResponse = await axios.get(`http://localhost:3000/suppliers/${supplierId}`);
    console.log('Get Supplier:', getSupplierResponse.data);

    // Update supplier
    const updateSupplierResponse = await axios.put(`http://localhost:3000/suppliers/${supplierId}`, {
      name: 'UpdatedTestSupplier',
    });
    console.log('Updated Supplier:', updateSupplierResponse.data);

    // Delete supplier
    const deleteSupplierResponse = await axios.delete(`http://localhost:3000/suppliers/${supplierId}`);
    console.log('Deleted Supplier:', deleteSupplierResponse.data);
  } catch (error) {
    console.error('Error testing suppliers:', error.response ? error.response.data : error.message);
  }
}

async function testProducts() {
  try {
    // Assume there is an existing category and supplier
    const categoryId = '1'; // Replace with a valid category ID
    const supplierId = '1'; // Replace with a valid supplier ID

    // Create product
    const createProductResponse = await axios.post('http://localhost:3000/products', {
      categoryId,
      supplierId,
      name: 'TestProduct',
      stocks: 10,
      price: 50,
    });
    console.log('Created Product:', createProductResponse.data);

    const productId = createProductResponse.data.id;

    // Read product
    const getProductResponse = await axios.get(`http://localhost:3000/products/${productId}`);
    console.log('Get Product:', getProductResponse.data);

    // Update product
    const updateProductResponse = await axios.put(`http://localhost:3000/products/${productId}`, {
      categoryId,
      supplierId,
      name: 'UpdatedTestProduct',
      stocks: 15,
      price: 60,
    });
    console.log('Updated Product:', updateProductResponse.data);

    // Delete product
    const deleteProductResponse = await axios.delete(`http://localhost:3000/products/${productId}`);
    console.log('Deleted Product:', deleteProductResponse.data);
  } catch (error) {
    console.error('Error testing products:', error.response ? error.response.data : error.message);
  }
}

async function testTransactions() {
  try {
    // Assume there is an existing product
    const productId = '1'; // Replace with a valid product ID

    // Create transaction
    const createTransactionResponse = await axios.post('http://localhost:3000/transactions', {
      productId,
      quantities: 2,
      payment_status: 'SUCCESS',
    });
    console.log('Created Transaction:', createTransactionResponse.data);

    const transactionId = createTransactionResponse.data.id;

    // Read transaction
    const getTransactionResponse = await axios.get(`http://localhost:3000/transactions/${transactionId}`);
    console.log('Get Transaction:', getTransactionResponse.data);

    // Update transaction
    const updateTransactionResponse = await axios.put(`http://localhost:3000/transactions/${transactionId}`, {
      productId,
      quantities: 3,
      payment_status: 'UNPAID',
    });
    console.log('Updated Transaction:', updateTransactionResponse.data);

    // Delete transaction
    const deleteTransactionResponse = await axios.delete(`http://localhost:3000/transactions/${transactionId}`);
    console.log('Deleted Transaction:', deleteTransactionResponse.data);
  } catch (error) {
    console.error('Error testing transactions:', error.response ? error.response.data : error.message);
  }
}

// Run all tests
(async () => {
  await testCategories();
  await testSuppliers();
  await testProducts();
  await testTransactions();

  console.log('All transactions (operations) Correct!');
})();
