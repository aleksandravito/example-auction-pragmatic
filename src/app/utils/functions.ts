export class FunksioneAuction {
  public calculateDiff(dateSent: Date) {
    const currentDate = new Date();
    dateSent = new Date(dateSent);
    // tslint:disable-next-line:max-line-length
    return Math.floor(
      (Date.UTC(
        dateSent.getFullYear(),
        dateSent.getMonth(),
        dateSent.getDate()
      ) -
        Date.UTC(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate()
        )) /
        (1000 * 60 * 60 * 24)
    );
  }
}
