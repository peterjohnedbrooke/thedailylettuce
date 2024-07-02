export const formatDate = (dateInput: string | number | Date) => {
  const date = new Date(dateInput);
  const day = date.getDate();
  const year = date.getFullYear();
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const monthName = months[date.getMonth()];

  // Determine the ordinal suffix
  let suffix = 'th';
  if (day % 10 === 1 && day !== 11) {
    suffix = 'st';
  } else if (day % 10 === 2 && day !== 12) {
    suffix = 'nd';
  } else if (day % 10 === 3 && day !== 13) {
    suffix = 'rd';
  }

  return `${day}${suffix} ${monthName} ${year}`;
};

// Example usage
const formattedDate = formatDate('2024-01-01');
console.log(formattedDate); // Output: "1st Jan 2024"
