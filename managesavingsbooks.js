class ManageSavingsBooks {
  constructor(name) {
    this.name = name;
    this.listSoTietKiem = [];
  }

  addSoTietKiem(newSoTietKiem) {
    this.listSoTietKiem.push(newSoTietKiem);
    this.saveToLocalStorage();
  }

  removeSoTietKiem(index) {
    this.listSoTietKiem.splice(index, 1);
    this.saveToLocalStorage();
  }
}
