/* Question URL:
https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md#circle---class

Answer: */

class Circle{
    //class properties set by the constructor set default values of radius and color
    constructor(radius = 1.0, color = "red")
    {
        this.radius = radius;
        this.color = color;
    }
    //method to get the radius 
    getRadius()
    {
        return this.radius;
    }
    // method to set radius
    setRadius(radius)
    {
        this.radius = radius;
    }
    //method to get the color
    getColor()
    {
        return this.color;
    }
    // method to set color
    setColor(color)
    {
        this.color = color;
    }
    // Method to convert Circle object to a string
    toString() {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }
     // Method to get the area of the circle
     getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    // Method to get the circumference of the circle
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

// Creating an instance of Circle with default constructor
let defaultCircle = new Circle();
console.log(defaultCircle.toString()); // Circle[radius=1, color=red]

// Creating an instance of Circle with custom radius
let customCircle = new Circle(5, 'blue');
console.log(customCircle.toString()); // Circle[radius=5, color=blue]

// Printing the area and circumference of the customCircle
console.log(`Area of customCircle: ${customCircle.getArea()}`); // Should print the area based on the radius 5 : Output: Area of customCircle: 78.53981633974483
console.log(`Circumference of customCircle: ${customCircle.getCircumference()}`); // Should print the circumference based on the radius 5 : Output : Circumference of customCircle: 31.41592653589793