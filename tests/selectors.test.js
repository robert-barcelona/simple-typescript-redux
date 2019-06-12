import test from 'ava';

import {getTopUsersByPasta} from "../src/selectors"
import {getPastaData} from "../src/logic"

test.beforeEach(t => {
  t.context = {
    fakeData: {
      "_id": "5bb238cbf839d08d65633450",
      "index": 0,
      "guid": "390322bb-3e93-4196-853a-e6e7a6f455bb",
      "isActive": true,
      "balance": "$2,193.03",
      "picture": "http://placehold.it/32x32",
      "age": 62,
      "eyeColor": "brown",
      "name": "Holder Joyce",
      "gender": "male",
      "company": "RAMEON",
      "email": "holderjoyce@rameon.com",
      "phone": "+1 (942) 548-3425",
      "address": "168 Ovington Court, Eagleville, Oregon, 1098",
      "about": "Voluptate eiusmod exercitation ad aliqua ullamco ex officia. Fugiat deserunt anim commodo anim reprehenderit cillum cupidatat magna anim. Do in sint elit deserunt sint amet veniam culpa et veniam.\r\n",
      "registered": "2017-09-21T02:55:55 -02:00",
      "latitude": 53.144539,
      "longitude": 111.973422,
      "favorites": {
        "cavatappi": 3.1604049168546533,
        "fusilli": 47.41214262743145,
        "spaghetti": 36.351431171952584,
        "tagliatelle ": 16.540786406823592,
        "farfalle": 29.91825944401951
      }
    },
    loadedData: {pastaData: getPastaData()},
  };
});


test('should throw an error on empty pasta data', t => {
  const error = t.throws(()=>getTopUsersByPasta( null,'fusilli'),Error);
  t.is(error.message, 'There is no pasta data')
});


test('should throw an error on empty pasta name', t => {
  const error = t.throws(()=>getTopUsersByPasta( t.context.loadedData,''),Error);
  t.is(error.message, 'There was no pasta specified')
});

test('should throw an error on null pasta name', t => {
  const error = t.throws(()=>getTopUsersByPasta(t.context.loadedData,null),Error);
  t.is(error.message, 'There was no pasta specified')
});

test('should throw an error on undefined pasta name', t => {
  const error = t.throws(()=>getTopUsersByPasta( t.context.loadedData,undefined),Error);
  t.is(error.message, 'There was no pasta specified')
});


test('should return correct data for good inputs', t => {
  const results = getTopUsersByPasta(t.context.loadedData,'cavatappi');
  t.is(results[0].name,'Ewing Chambers')
  t.is(results[0].gender,'male')
  t.is(results[0].favorites['cavatappi'],99.9812485080304)
});

