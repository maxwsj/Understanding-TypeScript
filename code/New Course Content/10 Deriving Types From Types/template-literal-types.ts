//////////// Exploring template literal types
type ReadPermissions = 'no-read' | 'read';
type WritePermissions = 'no-write' | 'write';

// Use template literal types to generate all possible combinations
type FilePermissions = `${ReadPermissions}-${WritePermissions}`;

type DataFile = {
   data: string;
   permissions: FilePermissions;
};

// Generate event names from the properties of `DataFile`
type DataFileEventNames = `${keyof DataFile}-changed`;

type DataFileEvents = {
   [Key in DataFileEventNames]: () => void;
};

//////////// Introducing conditional types

//////////// Conditional types - another example

//////////// Making sense of the “infer” leyword

//////////// Typescript’s got you covered: built-in utility types
