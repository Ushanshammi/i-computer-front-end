import { createClient } from "@supabase/supabase-js/dist/index.cjs";

const url="https://drrkhtmwkzgajkdpnqyx.supabase.co"

const key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRycmtodG13a3pnYWprZHBucXl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5NjQ5MDYsImV4cCI6MjA4NjU0MDkwNn0.YEMWiPkGFGBCjExl1otVVIuOk31ChumjwqzrSMTPbgw"

const supabase=createClient(url,key);

export default function uploadFile(file){

    return new Promise(
        (resolve , reject)=>{

                const timeStamp = Date.now();
                const fileName= timeStamp +  "_" + file.name;

                 supabase.storage.from("images").upload(fileName,file,

                    {
                cacheControl:"3600",
                upsert:false,
                    }       

                 ).then(
                    ()=>{
                        const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
                        resolve(publicUrl);
                    }
                 ).catch((err)=>{
                        reject(err);
                 })
        }
    );
}