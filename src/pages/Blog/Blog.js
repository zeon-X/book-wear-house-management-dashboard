import React from "react";

const Blog = () => {
  return (
    <div>
      <p className="text-2xl text-center mt-4">Blogs</p>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 p-8">
        <div className=" p-4">
          <p className="text-sm text-center font-bold mb-4">
            Difference between sql and nonsql database
          </p>
          <div className="grid grid-cols-2 gap-0">
            <div className="border border-gray-500 p-4 border-dashed">
              <p className="text-xl text-center mb-2">SQL Database</p>
              <p className="text-sm text-center">
                SQL database is a relational database.SQL databases are
                vertically scalable.SQL databases are table-based. SQL databases
                are better for multi-row transactions.
              </p>
            </div>
            <div className="border border-gray-500 p-4 border-dashed">
              <p className="text-xl text-center mb-2">Non-SQL Database</p>
              <p className="text-sm text-center">
                SQL database is a non-relational database. NoSQL databases are
                horizontally scalable.NoSQL databases are document, key-value,
                graph, or wide-column stores.NoSQL is better for unstructured
                data like documents or JSON.
              </p>
            </div>
          </div>
        </div>
        <div className=" p-4">
          <p className="text-sm text-center font-bold mb-4">
            What is the purpose of Jwt and How dose it work
          </p>
          <div className="grid grid-cols-1 gap-0">
            <div className="border border-gray-500 p-4 border-dashed">
              <p className="text-xl text-center mb-2">JWT</p>
              <p className="text-sm text-center">
                JSON Web Token, is an open standard used to share security
                information between two parties — a client and a server. Each
                JWT contains encoded JSON objects, including a set of claims.
                JWTs are signed using a cryptographic algorithm to ensure that
                the claims cannot be altered after the token is issued.
              </p>
              {/* </div>
            <div className="border border-gray-500 p-4 border-dashed"> */}
              <p className="text-xl text-center my-2">How JWT Works </p>
              <p className="text-sm text-center">
                In the most common serialization format, compact serialization,
                the JWT looks something like this: xxxxx.yyyyy.zzzzz. Once
                decoded, you will get two JSON strings: The header and the
                payload. The signature.  The JOSE header contains the type of
                token — JWT in this case — and the signing algorithm. The
                payload contains the claims. This is displayed as a JSON string,
                usually containing no more than a dozen fields to keep the JWT
                compact. This information is typically used by the server to
                verify that the user has permission to perform the action they
                are requesting.   When the token is used, the receiving party
                verifies that the header and payload match the signature.
              </p>
            </div>
          </div>
        </div>
        <div className=" p-4">
          <p className="text-sm text-center font-bold mb-4">
            Difference between javascript and nodejs
          </p>
          <div className="grid grid-cols-2 gap-0">
            <div className="border border-gray-500 p-4 border-dashed">
              <p className="text-xl text-center mb-2">javascript</p>
              <p className="text-sm text-center">
                Javascript is a Scripting language. It is mostly abbreviated as
                JS. It can be said that Javascript is the updated version of the
                ECMA script. Javascript is a high-level programming language
                that uses the concept of Oops but it is based on prototype
                inheritance. 
              </p>
            </div>
            <div className="border border-gray-500 p-4 border-dashed">
              <p className="text-xl text-center mb-2">nodejs</p>
              <p className="text-sm text-center">
                NodeJS is a cross-platform and opensource Javascript runtime
                environment that allows the javascript to be run on the
                server-side. Nodejs allows Javascript code to run outside the
                browser. Nodejs comes with a lot of modules and mostly used in
                web development. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
