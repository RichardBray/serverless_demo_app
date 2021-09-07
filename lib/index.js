import StorageStack from './StorageStack';
import ApiStack from './ApiStack';

export default function main(app) {
  const storageStack = new StorageStack(app, 'storage');

  new ApiStack(app, 'api', {
    table: storageStack.table,
  });
}
