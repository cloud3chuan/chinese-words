process.env.NODE_ENV = "testing";

import { Author, AuthorModel } from "../../models/models";
import * as chai from "chai";

const expect = chai.expect;

describe("Models Author", () => {

    let authorObject: Author;

    it("should insert new author", (done: Function) => {

        const author = new AuthorModel();
        author.name = "John";
        author.age = 30;
        author.description = "He is writer";

        author.save((err: Error, res: Author) => {

           authorObject = res;

           expect(res).to.be.an("object");
           expect(res.name).to.be.equal("John");
           done();
        });

    });

    /*
    it("should update user", async() => {
        const results: { nModified: number} = await Author.updateAuthor(authorObject._id, "He is not writer");

        expect(+results.nModified).to.be.equal(1);
    });

    it("should update by age", async() => {
        const results: { nModified: number} = await Author.updateByAge(21, "Good one :)");
        const author: IAuthor = <IAuthor>await Author.findById(authorObject._id).lean().exec();

        expect(author.description).to.be.equal("Good one :)");
        expect(+results.nModified).to.be.equal(1);
    });
    */
});
