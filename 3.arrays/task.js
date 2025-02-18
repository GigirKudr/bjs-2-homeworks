function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    return arr1.every((element, index) => element === arr2[index]);
  }

  function getUsersNamesInAgeRange(users, gender) {
    const userFiltered = users.filter(user => user.gender === gender)
    if (userFiltered.length === 0) {
      return 0;
  }
    const userMap = userFiltered.map(user => user.age)
    const userAge = userMap.reduce((sum, age) => sum + age, 0) / userMap.length

    return userAge
}