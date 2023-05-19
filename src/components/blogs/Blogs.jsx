import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
  useTitle('Blogs')
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Access Token and Refresh Token</h2>
      <p className="mb-4">
        An access token is a credential used to authenticate and authorize access to protected resources in a system.
        It is issued by an authentication server after the user successfully authenticates.
      </p>
      <p className="mb-4">
        A refresh token is a long-lived credential used to obtain a new access token without requiring the user to reauthenticate.
        It allows the client to request a new access token when the current one expires.
      </p>
      <p className="mb-8">
        Access tokens are typically stored on the client-side, in the browsers memory or secure storage mechanisms like localStorage or sessionStorage.
        Refresh tokens should be stored in HTTP-only cookies, which cannot be accessed by client-side JavaScript, enhancing security.
      </p>

      <h2 className="text-3xl font-bold mb-6">Comparison between SQL and NoSQL Databases</h2>
      <p className="mb-4">
        SQL (Structured Query Language) and NoSQL (Not only SQL) are two different types of database management systems.
        SQL databases are based on the relational model and use structured schemas, while NoSQL databases provide a flexible schema and use various data models.
        SQL databases use tables, rows, and columns to store data, while NoSQL databases use collections, documents, graphs, or key-value pairs.
      </p>
      <p className="mb-8">
        SQL databases are suitable for complex, structured data with strict relationships, and provide strong consistency and ACID (Atomicity, Consistency, Isolation, Durability) properties.
        NoSQL databases are suitable for handling large amounts of unstructured or semi-structured data, providing high scalability, availability, and eventual consistency.
      </p>

      <h2 className="text-3xl font-bold mb-6">Express.js and Nest.js</h2>
      <p className="mb-4">
        Express.js is a popular web application framework for Node.js, providing a minimalist and flexible approach to building web applications and APIs.
        It simplifies server-side development by offering essential features and middleware for routing, handling requests, and managing server-side logic.
      </p>
      <p className="mb-8">
        Nest.js is a progressive Node.js framework built on top of Express.js, offering a structured and opinionated application architecture.
        It combines elements of object-oriented programming, functional programming, and reactive programming to create scalable and maintainable applications.
        Nest.js provides features like dependency injection, decorators, modules, and powerful CLI tools, promoting code reusability and modularity.
      </p>

      <h2 className="text-3xl font-bold mb-6">MongoDB Aggregate</h2>
      <p className="mb-4">
        MongoDB Aggregate is a framework within the MongoDB database that allows for data processing and transformation operations.
        It provides a way to perform advanced queries, data analysis, and aggregation operations on the data stored in MongoDB collections.
        The Aggregate framework includes operators and stages that can be used to filter, group, project, sort, and perform calculations on data.
        It enables complex data manipulations and the ability to generate reports or summaries based on the data in the database.
      </p>
    </div>
  );
};

export default Blogs;
