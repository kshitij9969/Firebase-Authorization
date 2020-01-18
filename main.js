var mainApp = {};
firebase.auth().onAuthStateChanged(function(user) {
    var uid = null;
    console.log(user);
    if (user) {
        if(!user.emailVerified)
        user.sendEmailVerification();
        uid = user.uid;
        window.location.replace('login.html');
    }
    else{
        uid = null; 
        window.location.replace('login.html');
    }
  });
  function logout()
  {
      firebase.auth().signOut();
  }
  
  mainApp.logout = logout;