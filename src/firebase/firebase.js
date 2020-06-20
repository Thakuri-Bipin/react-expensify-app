import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_FMESSAGING_SENDER_ID,
    appId: "1:1040505475202:web:bad14e9c145ca98806649b",
    measurementId: "G-FWDYD4XGPG"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


// child_removed || fires when child is removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed || fires when child is changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added || fires when child is added and existing ones
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         // console.log(snapshot.val());
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// new expense property
// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 848484878
// });

// database.ref('expenses').push({
//     description: 'Phone Bill',
//     note: '',
//     amount: 5900,
//     createdAt: 868656
// });

// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 848484878
// });

// individual update notes and also remoe using remove() method
// database.ref('notes/-MACYEEetswTdkEsk5bs').update({
//     body: 'Buy food '
// });

// generate notes and push object 
// database.ref('notes').push({
//     title: 'Course Topic',
//     body: 'React, Angular, Python'
// });

// const firebaseNotes = {
//     notes: {
//         asdf: {
//             title: 'First note',
//             body: 'This is my note'
//         },
//         jkjkj: {
//             title: 'second note',
//             body: 'This is my note'
//         }
//     }
// };

// const notes = [
//     {
//         id: '12',
//         title: 'First note',
//         body: 'This is my note'
//     },
//     {
//         id: '345',
//         title: 'second note',
//         body: 'This is my note'
//     }
// ];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// runs when data is changed in database
// const onvalueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(50);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onvalueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(70);
// }, 10500);

// returns promise , runs single time
// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Thakuri Bipn',
//     age: 26,
//     stressLevel: 6,
//     // isSingle: 25,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Kathmandu',
//         country: 'Nepal'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('This is failed.', e);
// });

// database.ref().update({
//     stressLevel: 9, 
//     'job/company': 'Amazon',
//     'location/city': 'Dharan'
// });

// setting null to attribute will delete it
// database.ref().update({
//     name: 'Mike',
//     age: '28',
//     job: 'Software Developer',
//     isSingle: null
// });

// update wont work on nested like country is main data
// database.ref().update({
//     job: 'Manager',

//     // wont work
//     // location: {
//     //     city: 'Pokhara'
//     // }

//     // valid way
//     'location/city': 'Pokara'
// });

// sets age value to 20
// database.ref('age').set(20);

// updates city of location object
// database.ref('location/city').set('Thankot');

// sets new attribute to root data with name 'attributes'
// database.ref('attributes').set({
//     height: 73,
//     weight: 150
// }).then(() => {
//     console.log('second data is saved');
// }).catch((e) => {
//     console.log('Second one is failed.', e);
// });

// remove single attribute
// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data is removed');
//     }).catch((e) => {
//         console.log('Did not remove data', e);
//     });

// remove evthing from root
// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data is removed');
//     }).catch((e) => {
//         console.log('Did not remove data', e);
//     });