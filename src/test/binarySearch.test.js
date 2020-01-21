import { arr } from "./test_example";
import binarySearch from "./../utils/binarySearch";

/*describe.only*/

describe(`binarySearch with parameters '(arr: number[], key: number, start: number, end: number)'`, () => {
	const basicStart = 0;
	const basicEnd = arr.length - 1;
	const failResult = -1;

	arr.forEach((element, index) => {
		test(`the desired key is "${element}"`, () => {
			expect(binarySearch(arr, element, basicStart, basicEnd)).toEqual(index);
		});
	});

	test(`the desired key is "-15", but it is not in the array`, () => {
		expect(binarySearch(arr, -15, basicStart, basicEnd)).toEqual(failResult);
	});

	test(`the desired key is "4", but it is not in the array`, () => {
		expect(binarySearch(arr, 4, basicStart, basicEnd)).toEqual(failResult);
	});

	test(`the desired key is "666", but it is not in the array`, () => {
		expect(binarySearch(arr, 666, basicStart, basicEnd)).toEqual(failResult);
	});
});
