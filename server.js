const express = require('express');
const { PrismaClient } = require('./prisma/generated');

const prisma = new PrismaClient();

const app = express();
app.use(express.json());



// Create a new category
app.post('/categories', async (req, res) => {
    try {
      const { name } = req.body;
      const result = await prisma.categories.create({
        data: {
          name,
        },
      });
      res.json(result);
    } catch (error) {
      console.error('Error creating category:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Get a specific category by ID
  app.get('/categories/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const result = await prisma.categories.findUnique({ where: { id } });
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ error: 'Category not found' });
      }
    } catch (error) {
      console.error('Error getting category:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Update a category by ID
  app.put('/categories/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const result = await prisma.categories.update({
        where: { id },
        data: {
          name,
        },
      });
      res.json(result);
    } catch (error) {
      console.error('Error updating category:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Delete a category by ID
  app.delete('/categories/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const result = await prisma.categories.delete({ where: { id } });
      res.json(result);
    } catch (error) {
      console.error('Error deleting category:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/suppliers', async (req, res) => {
    try {
      const { name } = req.body;
      const result = await prisma.suppliers.create({
        data: {
          name,
        },
      });
      res.json(result);
    } catch (error) {
      console.error('Error creating supplier:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Get a specific supplier by ID
  app.get('/suppliers/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const result = await prisma.suppliers.findUnique({ where: { id } });
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ error: 'Supplier not found' });
      }
    } catch (error) {
      console.error('Error getting supplier:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Update a supplier by ID
  app.put('/suppliers/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const result = await prisma.suppliers.update({
        where: { id },
        data: {
          name,
        },
      });
      res.json(result);
    } catch (error) {
      console.error('Error updating supplier:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Delete a supplier by ID
  app.delete('/suppliers/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const result = await prisma.suppliers.delete({ where: { id } });
      res.json(result);
    } catch (error) {
      console.error('Error deleting supplier:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// List all products
app.get('/products', async (req, res) => {
    const products = await prisma.products.findMany();
    res.json(products);
  });  

// Create
app.post('/products', async (req, res) => {
    try {
      const { categoryId, supplierId, name, stocks, price } = req.body;
      const result = await prisma.products.create({
        data: {
          categoryId,
          supplierId,
          name,
          stocks,
          price,
        },
      });
      res.json(result);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Read
app.get('/products/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const result = await prisma.products.findUnique({ where: { id } });
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      console.error('Error getting product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Update
app.put('/products/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { categoryId, supplierId, name, stocks, price } = req.body;
      const result = await prisma.products.update({
        where: { id },
        data: {
          categoryId,
          supplierId,
          name,
          stocks,
          price,
        },
      });
      res.json(result);
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Delete
app.delete('/products/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const result = await prisma.products.delete({ where: { id } });
      res.json(result);
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Create a new transaction
app.post('/transactions', async (req, res) => {
    try {
      const { productId, quantities, payment_status } = req.body;
      const result = await prisma.transactions.create({
        data: {
          productId,
          quantities,
          payment_status,
        },
      });
      res.json(result);
    } catch (error) {
      console.error('Error creating transaction:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Get a specific transaction by ID
  app.get('/transactions/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const result = await prisma.transactions.findUnique({ where: { id } });
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ error: 'Transaction not found' });
      }
    } catch (error) {
      console.error('Error getting transaction:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Update a transaction by ID
  app.put('/transactions/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { productId, quantities, payment_status } = req.body;
      const result = await prisma.transactions.update({
        where: { id },
        data: {
          productId,
          quantities,
          payment_status,
        },
      });
      res.json(result);
    } catch (error) {
      console.error('Error updating transaction:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Delete a transaction by ID
  app.delete('/transactions/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const result = await prisma.transactions.delete({ where: { id } });
      res.json(result);
    } catch (error) {
      console.error('Error deleting transaction:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });