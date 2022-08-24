class Mohreh{
    constructor(color, x, y, board){
        this._color = color;
        this.x = x;
        this.y =y;
        this._board = board;
        this.name = '';
        
    }
    move(x,y){
        this.x = x;
        this.y =y;
 }

    set x(value){
        if(value > "h" || value < "a"){
            throw new Error("the value of x is invalid")
        }
        this._x = value;
  }
   set y(value){
    if(value > 8 || value < 1){
        throw new Error("the value of x is invalid")
    }
    
        this._y = value;
}

    get color(){
        return this._color;
    }
    get location(){
        return {x: this._x, y: this._y}
    }
}

class Board{
    constructor(){
        this._board = [
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
        ];
    }
    takeCell(obj, x, y){
        let _x = x.charCodeAt(0) - 97;
        let _y = y - 1;
        let oldObj = this._board[_y] [_x];
        if (oldObj && oldObj.color !== obj.color){
            oldObj = null;
        }else if (oldObj && oldObj.color === obj.color){
            throw new Error("this cell already is taken by you");
        } 
        this._board[_y] [_x] = obj;
    }
    get snapShot(){
        return this._board;
    }
    getCell(x,y){
        let _x = x.charCodeAt(0) - 97;
        let _y = y - 1;
        return this._board[_y] [_x]
    }
}

class Soldier extends Mohreh{
    constructor(color, x, y){
        super(color, x, y)
        this._name = "soldier";
    }
    get name(){
        return this._name;
    }
    set name(value){
        throw new Error("you can't change the name")
    }
    move(x,y){
        if(x !== this._x || y !== this._y + 1){
            throw new Error("you can't move here")
        }
        super.move(x,y);

    }
}

class Horse extends Mohreh{
    constructor(color, x, y){
        super(color, x, y)
        this._name = "Horse";
    }
    get name(){
        return this._name;
    }
    set name(value){
        throw new Error("you can't change the name")
    }
    move(x,y){
        if((x !== this._x + 2 && y !== this._y + 1) || (y !== this._y + 2 && x !== this._x + 1) ){
            throw new Error("you can't move here")
        }
        super.move(x,y);

    }
}

class Rokh extends Mohreh{
    constructor(color, x, y){
        super(color, x, y)
        this._name = "Rokh";
    }
    get name(){
        return this._name;
    }
    set name(value){
        throw new Error("you can't change the name")
    }
    move(x,y){
        if(x !== this._x || y !== this._y ){
            throw new Error("you can't move here")
        }
        super.move(x,y);

    }
}

class Elephant extends Mohreh{
    constructor(color, x, y){
        super(color, x, y)
        this._name = "Elephant";
    }
    get name(){
        return this._name;
    }
    set name(value){
        throw new Error("you can't change the name")
    }
    move(x,y){
        if(x !== this.x/2 || y !== this.y/2){
            throw new Error("you can't move here")
        }
        super.move(x,y);

    }
}


class Vazir extends Mohreh{
    constructor(color, x, y){
        super(color, x, y)
        this._name = "Vazir";
    }
    get name(){
        return this._name;
    }
    set name(value){
        throw new Error("you can't change the name")
    }
    move(x,y){
        if(x !== this.x || y !== this.y){
            throw new Error("you can't move here")
        }
        super.move(x,y);

    }
}

class Shah extends Mohreh{
    constructor(color, x, y){
        super(color, x, y)
        this._name = "Shah";
    }
    get name(){
        return this._name;
    }
    set name(value){
        throw new Error("you can't change the name")
    }
    move(x,y){
        if(x !== this.x+1 || y !== this.y+1){
            throw new Error("you can't move here")
        }
        super.move(x,y);

    }
}








const board = new Board();
const soldier = new Soldier("white", "a", 2);
soldier.move("a", 2)
console.log(soldier.location)

// const horse = new Horse("white", "a", 3);
// horse.move("a", 3)
// console.log(horse.location)