type Props = {
    day: number;
    month: number;
    year: number
}
export const CalcAge = ({ day, month, year }: Props) => {
    let now = new Date();

    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    let currentDay = now.getDate();

    let diference = currentYear - year;

    let age = diference;

    if((currentMonth + 1) <= month) {
        age = diference - 1;
        if((currentMonth + 1) === month && currentDay < day) {
            age = diference - 1;
        } 
    }

    return (
        <>
            {age}
        </>
    )
}