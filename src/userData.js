import firebase from "firebase";
import "firebase/storage";

const getFireData = () => {
  let userData = [];
  let db = firebase.database();
    let ref = db.ref("/users");
    let self = this;
    ref.once('value')
    .then(snapshot => {
        /*self.setState({
            data: snapshot.val()
        });*/
        userData.push(snapshot.val());
    });

    return userData;
}

export default getFireData;