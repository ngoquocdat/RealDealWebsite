const data = `
    _main_menu_home: Trang Chu,
    _main_menu_about: RealDeal la gi ?,
    _main_menu_chat: Phong tu van du an
`;

const newObj = (object: any) => Object.keys(object).reduce((accumulator: any, key) => {
    if (object[key] != null) {
      accumulator[key] = object[key];
    }
    return accumulator;
  }, {});

const testReadFile = () => {
    const new_JSON = data.split("\n\n").map((entry) => {
      const obj: any = {};
      entry.split("\n").forEach((keyValue) => {
        const split = keyValue.split(": ");
        const key: any = split[0].trim();
        const value: any = split[1];
        obj[key] = value;
      });
      return obj;
    });
    return newObj(new_JSON[0]);
};

export default testReadFile; 