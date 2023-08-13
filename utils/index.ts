export function formatDate(inputDate: string): string {
    const dateParts = inputDate.split('-');
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];
  
    return `${day}-${month}-${year.slice(-2)}`;
  }  