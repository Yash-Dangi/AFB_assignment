const request = require('supertest')
const app = require('./index');
const mongoose = require('mongoose');
require('dotenv').config();
describe('Test the data routes', () => {
    beforeEach(async () => {
        await mongoose.connect(process.env.DATABASE_URL);
      });
      
      /* Closing database connection after each test. */
      afterEach(async () => {
        await mongoose.connection.close();
       });
    
      test('POST /api/v1/create should respond with 200 and success message', async () => {
        const response = await request(app)
          .post('/api/v1/create')
          .send({
          'Circle Name': 'Andhra Pradesh Circle',
          Delivery: 'Delivery',
          District: 'ANANTHAPUR',
          'Division Name': 'Anantapur Division',
          'Office Name': 'Appilepalli B.O',
          OfficeType: 'BO',
          PinCode: '515456',
          'Region Name': 'Kurnool Region',
          StateName: 'Andhra Pradesh'});
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ PinCode : '515456' ,Message: 'New Element Created Successfully' });
      });
    
      test('PUT / should respond with 200 and success message', async () => {
        const response = await request(app)
          .put('/api/v1/update')
          .send({
             id  : '6623efe62c7f8b4319d94501',
             data : {
                'Circle Name': 'Andhra Pradesh Circle',
                Delivery: 'Delivery',
                District: 'ANANTHAPUR',
                'Division Name': 'Anantapur Division',
                'Office Name': 'Appilepalli B.O',
                OfficeType: 'BO',
                PinCode: '51544',
                'Region Name': 'Kurnool Region',
                StateName: 'Andhra Pradesh'}
          });
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ msg: 'Updated Successfully' });
      });
    
      test('DELETE / should respond with 200 and success message', async () => {
        const response = await request(app).delete('/api/v1/delete').query({ id: '6623efe62c7f8b4319d94502' });
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ msg: 'Successfuly Deleted' });
      });
});

