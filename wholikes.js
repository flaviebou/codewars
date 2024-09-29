function likes(names) {
      const x=names.length;
      if(x==0){
        return "no one likes this";
      }
      else if(x==1){
        return names[0]+" likes this";
      }
      else if(x==2){
        return names[0]+" and "+names[1]+" like this";
      }
      else if(x==3){
        return names[0]+", "+names[1]+" and "+names[2]+" like this";
      }
      else{
        const y=x-2;
        return names[0]+", "+names[1]+" and "+y+" others like this";
      }
  }
