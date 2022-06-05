import { Storage } from '@capacitor/storage';

export class StorageService{

    constructor(){

    }

    async set(key:string, value:any):Promise<void>{
        return new Promise((resolve, reject)=>{
            Storage.set({key: key, value: value})
                .then(()=>{
                    resolve();
                }).catch(()=>{
                    reject();
                });
        });
    };
      
    async get(key:string):Promise<any> {
        return new Promise((resolve, reject)=>{
            Storage.get({ key: key })
                .then((data)=>{
                    resolve(data.value);
                })
                .catch((error)=>{
                    reject(error)
                });
        });
       
      };
      
    async remove(key:string):Promise<void>{
        return new Promise((resolve, reject)=>{
            Storage.remove({ key: key })
                .then(()=>{
                    resolve();
                })
                .catch(()=>{
                    reject();
                });
        });
    };

    async clear():Promise<void>{
        return new Promise((resolve, reject)=>{
            Storage.clear()
                .then(() => {
                    resolve();
                }).catch(() => {
                    reject();
                });
        });
    }

}