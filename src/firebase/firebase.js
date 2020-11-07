import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB3Qa89Nth1yugkArFcd8BJiBt7uX6NYck",
    authDomain: "expensify-aeb18.firebaseapp.com",
    databaseURL: "https://expensify-aeb18.firebaseio.com",
    projectId: "expensify-aeb18",
    storageBucket: "expensify-aeb18.appspot.com",
    messagingSenderId: "641646266406",
    appId: "1:641646266406:web:4d2301367d2153cf3ffee7"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default };

/*// chiled_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// chiled_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').push({
    description: 'To Do',
    note: 'This is my note 1.',
    amount: 195,
    createdAt: 0
});

database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
});

setTimeout(() => {
    database.ref('expenses/-MLTNcM-gCbkv1ZlbQ5x/note').set('This is my updated note.');
}, 7000);

database.ref('expenses').once('value').then((snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
});

database.ref('expenses').push({
    description: 'Gum',
    note: 'This is my note 1.',
    amount: 195,
    createdAt: 0
});

database.ref('notes/-MLTLIhYFspbX3ZQGhW3').remove();

database.ref('notes').push({
    title: 'COurse Topics',
    body: 'Python'
});

database.ref().on('value', (snapshot) => {
    const name = snapshot.val().name;
    const jobTitle = snapshot.val().job.title;
    const company = snapshot.val().job.company
    console.log(`${name} is a ${jobTitle} at ${company}.`);
});

setTimeout(() => {
    database.ref('name').set('Mike');
}, 7000);

const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
}, (e) => {
    console.log('error: ', e);
});

setTimeout(() => {
    database.ref('age').set(29);
}, 3500);

setTimeout(() => {
    database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
    database.ref('age').set(30);
}, 10500);

database.ref('location/city').once('value').then((snapshot) => {
    console.log('data is fetched!', snapshot.val());
}).catch((error) => {
    console.log('error: ', error);
});

database.ref().set({
    name: 'Ankit Rahangdale',
    age: 32,
    stressLevel: 6,
    job: {
        title: 'Software Developer',
        company: 'Google'
    },
    location: {
        city: 'Chhindwara',
        country: 'India'
    }
}).then(() => {
    console.log('data is saved!');
}).catch((error) => {
    console.log('error: ', error);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
}).then(() => {
    console.log('data updated');
}).catch((e) =>{
    console.log('error: ', e);
});

//database.ref('isSingle').set(null);
database.ref('age').set(27);

database.ref('location/city').set('Seoni');

database.ref('attributes').set({
    height: 71,
    weight: 75
}).then(() => {
    console.log('attributes are saved');
}).catch((error) => {
    console.log('error: ', error);
});

database.ref().remove().then(() => {
    console.log('data removed');
}).catch((error) => {
    console.log('error: ',error);
});*/


