import { faker } from '@faker-js/faker';

const getDate = () => {
	const date = faker.date.anytime().toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
	return date.toLocaleString();
}

function capitalizeFirstLetter(inputString: string): string {
  const lines: string[] = inputString.split('\n');
  const capitalizedLines: string[] = lines.map((line: string) => {
    if (line.trim().length > 0) {
      return line.charAt(0).toUpperCase() + line.slice(1);
    } else {
      return line;
    }
  });
  const resultString: string = capitalizedLines.join('\n');
  return resultString;
}

export {
	getDate,
	capitalizeFirstLetter
}