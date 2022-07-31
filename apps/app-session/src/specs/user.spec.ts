import supertest from 'supertest';
import { faker } from '@faker-js/faker';
import { app } from '@serve/main';
import { fields, status } from '@serve/utils/system-utils';

describe('user::unittest', () => {
  it('created an accounts', async () => {
    await supertest(app.app)
      .post('/api/v1/user/created')
      .set('content-type', 'application/json')
      .send({
        fullname: `${faker.name.firstName()} ${faker.name.middleName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
        password: 'password',
        confirmation: 'password',
      })
      .expect(status.CREATED)
      .then((res) => {
        expect(res.body.message).toEqual('Accounts has been created');
      });
  });

  if (fields['user']) {
    const user = fields['user'];
    it('log in an accounts', async () => {
      await supertest(app.app)
        .post('/api/v1/user/login')
        .set('content-type', 'application/json')
        .send({
          token: user.email,
          password: 'password',
        })
        .expect(status.OK)
        .then((res) => {
          expect(res.body.token.length).not.toEqual(1);
        });
    });

    it('reset an accounts', async () => {
      await supertest(app.app)
        .post('/api/v1/user/reset')
        .set('content-type', 'application/json')
        .send({
          email: user.email,
        })
        .expect(status.OK)
        .then((res) => {
          expect(res.body.message).toEqual(
            'Password has been reset, please check your email account.'
          );
        });
    });
  }

  if (fields['token']) {
    const user = fields['user'];
    const token = fields['token'];
    it('change password', async () => {
      await supertest(app.app)
        .post('/api/v1/user/password')
        .set('content-type', 'application/json')
        .set('authorization', `Bearer ${token}`)
        .send({
          old_password: 'password',
          password: 'password',
          confirmation: 'password',
        })
        .expect(status.OK)
        .then((res) => {
          expect(res.body.message).toEqual('Password has been updated');
        });
    });

    it('update an roles', async () => {
      await supertest(app.app)
        .post('/api/v1/user/roles')
        .set('content-type', 'application/json')
        .set('authorization', `Bearer ${token}`)
        .send({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          gender: faker.helpers.arrayElement(['Male', 'Female']),
          birthday: new Date().toISOString(),
        })
        .expect(status.OK)
        .then((res) => {
          expect(res.body.message).toEqual('Profile has been updated');
        });
    });

    it('upload file avatar', async () => {
      await supertest(app.app)
        .post('/api/v1/user/upload/avatar')
        .set('content-type', 'multipart/form-data')
        .set('authorization', `Bearer ${token}`)
        .attach('file', '422d9e7f488b0c9c6d69acf37bf8344f.jpeg')
        .expect(status.OK)
        .then((res) => {
          expect(res.body.message).toEqual('Profile has been updated');
        });
    });

    it('find all user', async () => {
      await supertest(app.app)
        .get('/api/v1/user')
        .set('content-type', 'application/json')
        .set('authorization', `Bearer ${token}`)
        .query({ email: '' })
        .expect(status.OK)
        .then((res) => {
          expect(res.body).not.toEqual(null);
        });
    });

    it('find one user', async () => {
      await supertest(app.app)
        .get(`/api/v1/user/${user.public_id}`)
        .set('content-type', 'application/json')
        .set('authorization', `Bearer ${token}`)
        .expect(status.OK)
        .then((res) => {
          expect(res.body).not.toEqual(null);
        });
    });
  }
});
