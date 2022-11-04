(()=>{
  const tempInstallNeeds = [
    {
      name: 'mesonInstall',
      url: 'https://dashboard.meson.network/'
    },
    {
      name: 'traffmonetizer',
      url: 'https://app.traffmonetizer.com/stats'
    }
  ]
  const tempInstallNeed = tempInstallNeeds.find(item => item.name === 'traffmonetizer1')
  console.log(tempInstallNeed);
  if (tempInstallNeed) {
    console.log(2)
    // setTimeout(() => {
    //   this.$message({
    //     dangerouslyUseHTMLString: true,
    //     message: `<a href="${tempInstallNeed.url}" target="_blank">To ensure successful operation, you can click here to view node binding information</a>`,
    //     type: 'success',
    //     duration: 5000
    //   })
    // }, 10)
  }
})()