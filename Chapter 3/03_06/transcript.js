var counties = ["Belknap", "Strafford", "Carroll", "Rockingham"];

counties[0];
counties[2];

counties[2] = "Cheshire";
counties;

counties[4] = "Carroll";
counties;
console.log(counties);

counties[counties.length] = "Merrimack";
counties;
console.log(counties);

counties.push("Coos");
console.log(counties);

counties.pop();
console.log(counties);

delete counties[2]; // cause empty Item
console.log(counties);

counties.splice(2,1);
console.log(counties);
counties.length;
console.log(counties.length);