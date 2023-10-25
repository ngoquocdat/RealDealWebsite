import { formatter } from "./StepsJoinToROOM/datas";

interface IProperty {
    floorArea: number,
    pricePerSquare: number,
    total: number,
    [k: string]: any
}

export function calculateDiscountPrice(personIndex: number, openTotalRooms: number, property: IProperty) {

    const _price = property.floorArea*property.pricePerSquare;;

    if(personIndex > openTotalRooms) {
        return _price
    }

    const discountPercentPerson: number = openTotalRooms === 10 ? 0.1 : (openTotalRooms > 20 ? 0.2 : 0.15),
        discountGivePreviousPerson: number  =  Number((personIndex === 1 ? 0 : discountPercentPerson*0.05).toFixed(3)),
        discountGiveEveryOne: number  = Number((personIndex === 1 ? 0 : discountPercentPerson*0.05).toFixed(3)),
        discountGiveNextPerson: number  = Number((personIndex === openTotalRooms ? 0 : discountPercentPerson*0.05).toFixed(3));
    
    const percentAddFromFollower = (): number => {
        if(personIndex >= (openTotalRooms-1)) {
            return discountGiveEveryOne/personIndex;
        } else {

            let _tempValue = 0;
            let _tempPosition = openTotalRooms;

            do {
                if(_tempPosition === openTotalRooms) {
                    _tempValue = 0;
                } else {
                    _tempValue = (_tempPosition === openTotalRooms - 1) 
                        ? discountGiveEveryOne/_tempPosition
                        : discountGiveEveryOne/_tempPosition+_tempValue; 
                }
                // console.log(`percentAddFromFollower ${personIndex} : `, _tempPosition, (_tempValue*100).toFixed(3));
                _tempPosition--;
            }
            
            while(_tempPosition > personIndex);
            return Number(_tempValue.toFixed(5));
        }
    };

    const discountIncludes = () => {
        let _value = 0;
        /** First position */
        if(personIndex === 0) {
            _value = Number((discountPercentPerson + (discountGiveNextPerson + percentAddFromFollower())).toFixed(5));
            // console.log(`discountIncludes - First position: `,_value*100);
        }
        /** Last position */
        if(personIndex === openTotalRooms) {
            _value = discountPercentPerson - (discountGivePreviousPerson + discountGiveEveryOne);
            // console.log(`discountIncludes - Last position: `, Number(_value.toFixed(5))*100);
        } else {
            /** Normal position */
            _value = ((discountPercentPerson - (discountGivePreviousPerson + discountGiveEveryOne)) + (discountGiveNextPerson + percentAddFromFollower()));
            // console.log(`discountIncludes - Position ${personIndex+1}: `, Number(_value.toFixed(5))*100);
        }
        return _value
    },
    discountPrice = _price-(_price*discountIncludes());
    
    console.log(`calculateDiscountPrice - ${personIndex === 0 ? "First position" : (personIndex > 0 && personIndex < openTotalRooms ? `Position ${personIndex+1}` : "Last position")}: `, Number((discountIncludes()*100).toFixed(5)), formatter.format(discountPrice));
    
    return {
        personPosition: personIndex+1,
        percentAddFromFollower: percentAddFromFollower(),
        percentDiscount: Number(discountIncludes().toFixed(4))*100,
        discountPrice: formatter.format(_price*discountIncludes()),
        finalPrice: formatter.format(discountPrice)
    }
}