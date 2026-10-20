   function getAge(user) {
     return 2026 - user.birthYear;
   }

   function isAdult(user) {
     if (getAge(user) > 18) return true;
   }
