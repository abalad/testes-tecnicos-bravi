const expect = require('expect.js');
const app = require('../../src/app');
const rp = require('request-promise');
const url = require('url');
const people = require('../data/people.json');

const port = app.get('port') || 3030;
const getUrl = pathname => url.format({
  hostname: app.get('host') || 'localhost',
  protocol: 'http',
  port,
  pathname
});

describe('\'people\' service', () => {
  it('should create a person', () => {
    return rp({
      url: getUrl('people'),
      method: 'POST',
      json: true,
      resolveWithFullResponse: true,
      form: people[0],
    }).then(res => {
      expect(res.statusCode).to.eql(201);
      expect(res.body.contacts.email).to.eql('mister-x59@hotmail.com.br');
      expect(res.body.contacts.whatsapp).to.eql('+5544998266416');
      expect(res.body.lastName).to.eql('Wagner dos Santos');
    });
  });

  it('should return people', () => {
    return rp({
      url: getUrl('people'),
      json: true,
      resolveWithFullResponse: true
    }).then(res => {
      expect(res.statusCode).to.eql(200);
      expect(res.body.data.length).to.be.greaterThan(0);
      expect(res.body.total).to.be.greaterThan(0);
    });
  });

  it('should change the person\'s last name', () => {
    return rp({
      url: getUrl('people') + '/5b9e695e176cfe0020dbd86a',
      method: 'PATCH',
      json: true,
      form:{
        lastName: "Wagner dos Santos Pilegi"
      },
      resolveWithFullResponse: true
    }).then(res => {
      expect(res.statusCode).to.eql(200);
      expect(res.body.contacts.email).to.eql('mister-x59@hotmail.com.br');
      expect(res.body.contacts.whatsapp).to.eql('+5544998266416');
      expect(res.body.lastName).to.eql('Wagner dos Santos Pilegi');
    });
  });

  it('should remove a person', () => {
    return rp({
      url: getUrl('people') + '/5b9e695e176cfe0020dbd86a',
      method: 'DELETE',
      json: true,
      resolveWithFullResponse: true
    }).then(res => {
      expect(res.statusCode).to.eql(200);
      expect(res.body.contacts.email).to.eql('mister-x59@hotmail.com.br');
      expect(res.body.contacts.whatsapp).to.eql('+5544998266416');
      expect(res.body.contacts.phone).to.eql('4436496711');
    });
  });

  it('shows a 404 JSON error when it can not find the record to delete', () => {
    return rp({
      url: getUrl('people') + '/5b9f066db57993000f640140',
      method: 'DELETE',
      json: true,
      resolveWithFullResponse: true
    }).catch(res => {
      expect(res.statusCode).to.eql(404);
      expect(res.error.code).to.eql(404);
      expect(res.error.message);
      expect(res.error.name);
    });
  });
});
