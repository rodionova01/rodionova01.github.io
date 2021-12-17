export class Agenda extends Array
{
    add(node)
    {
        this.push(node)
    }

    getNode()
    {
        return this.shift()
    }

    notEmpty()
    {
        return this.length !== 0
    }
}
