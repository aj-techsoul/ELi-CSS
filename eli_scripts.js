function formsubmit(formid){

       //alert(formid);
       $('.result').html('<p style="display:block; text-align:center;"><i class="fa fa-refresh fa-spin fa-fw" aria-hidden="true"></i><span class="sr-only">Process...</span> Processing</p>');
        var action = $(formid).attr('action');
        var formdata = $(formid).serialize();


        $.post(action,formdata, function(data, status){
            //alert("Action: " + action + "\nStatus: " + status);
            if(status==='success')
            {
                $('.result').html(data);
            }
            else
            {
                $('.result').html("Kindly check your internet connection.");
            }
        });
    };

function eliSubmit(formid){

       //alert(formid);
       $('.result').html('<p style="display:block; text-align:center;"><i class="fa fa-refresh fa-spin fa-fw" aria-hidden="true"></i><span class="sr-only">Process...</span> Processing</p>');
        var action = $(formid).attr('action');
        var formdata = $(formid).serialize();


        $.post(action,formdata, function(data, status){
             $('.result').html(data);
            // alert("Data: " + action + "\nStatus: " + status);
            if(status==='success')
            {
                $('.result').html(data);
                console.log(data);
              var tag = 'Success';

               $('.result').html("");
               $('.result').html(data);

                if(data.indexOf(tag) !== -1){
                //   Materialize.toast(data, 5000,'green');
                   Swal.fire({
                      position: 'center',
                      type: 'success',
                      title: data,
                      showConfirmButton: false,
                      timer: 3000
                    })
                }
                else
                {
                //    Materialize.toast(data, 5000,'red');
                    Swal.fire({
                       position: 'center',
                       type: 'error',
                       title: data,
                       showConfirmButton: false,
                       timer: 4500
                     })
                }

            }
            else
            {
                $('.result').html("Kindly check your internet connection.");
            }
        }).fail(function(){
            Materialize.toast("Fail to Process", 5000,'red');
        });
    };

    function delrow(field,row){

      if (confirm("Are you sure to delete this records ?")) {
           //alert(formid);
           $('.result').html('<p style="display:block; text-align:center;"><i class="fa fa-refresh fa-spin fa-fw" aria-hidden="true"></i><span class="sr-only">Process...</span> Processing</p>');
            var action = "p/delrow/"+$(field).attr('data-action');
            var delid = $(field).attr('data-id');


            $.post(action,{ id: delid }, function(data, status){
                 $('.result').html(data);
                // alert("Data: " + action + "\nStatus: " + status);
                if(status==='success')
                {
                  //  $('.result').html(data);
                  var tag = 'Successfully';

                  // $('.result').html("");
                    if(data.indexOf(tag) != -1){

$(row+delid).hide();

                      Swal.fire({
                        position: 'top-end',
                        type: 'success',
                        title: data,
                        showConfirmButton: false,
                        timer: 1500
                      })



                    }
                    else
                    {
                      $(row+delid).show();

                      Swal.fire({
                        position: 'top-end',
                        type: 'error',
                        title: data,
                        showConfirmButton: false,
                        timer: 1500
                      })

                    }
                }
                else
                {
                    $('.result').html("Kindly check your internet connection.");
                }
            });
          }
          else {
            Materialize.toast('You chose to Cancel.', 1000,'orange');
          }
        }




function getData(action,senddata='',embedtoid,processto){

       //alert(formid);
       $(processto).html('<p style="display:block; text-align:center;"><i class="fa fa-refresh fa-spin fa-fw" aria-hidden="true"></i><span class="sr-only">Process...</span> Processing</p>');


        $.post(action,senddata, function(data, status){
            //$(processto).html(data);
            //alert("Action: " + data + "\nStatus: " + status);
            if(status==='success')
            {
                data = data;

                $(embedtoid).html(data);
               // $(embedtoid).select2({ data: data });
                //$(processto).html('');
                console.log('loaded');
            }
            else
            {
                $(processto).html("Kindly check your internet connection.");
            }
        });
    };

 function gData(action,embedtoid,senddata=''){
        var appid = "YWppYjc3Nw==";
        var apiurl = "api/app/";
        var senddata = { 'appid' : appid, 'data':senddata };
        $.post(apiurl+action,senddata, function(data, status){
            if(status==='success')
            {
                data = data;
               // console.log(data);
                $(embedtoid).html(data);
            }
            else
            {
                Materialize.toast('Some problem at Server', 2000,'red');
            }
        }).fail(function(){
            Materialize.toast('Offline mode | No Data can be loaded', 2000,'grey');
        })
    }

    function editData(field,modal,action){
      var id = $(field).attr('data-id');
      var uid = $(field).attr('data-uid');
      var csrf = $(field).attr('csrf');
      var tbl = $(field).attr('data-t');

      document.querySelector(modal+' form').reset();

      var senddata = { "id": id, "csrf": csrf, "tbl": tbl, "uid": uid };
        $.post("API/"+action,senddata, function(data, status){
            console.log(senddata);
          if(status==='success')
          {
              var data = data;
              data = $.trim(data);
              data= data.replace(/\u0/,'');
              console.log(data);
              data = JSON.parse(data);

              // reset form values from json object
              $.each(data, function(name, valu){
                  var $el = $('[name="'+name+'"]'),
                      type = $el.attr('type');

                  switch(type){
                      case 'checkbox':
                          $el.attr('checked', 'checked');
                          break;
                      case 'radio':
                          $el.filter('[value="'+valu+'"]').attr('checked', 'checked');
                          break;
                      default:
                          $el.val(valu);
                  }
              });

              document.querySelector(modal).classList.add('active');
              UpdateFields();

          }
          else
          {
            Swal.fire({
                  position: 'top-end',
                  type: 'success',
                  title: 'Unable to load data',
                  showConfirmButton: false,
                  timer: 1500
                })
          }
        }).fail(function(){
            Materialize.toast('Unable to load connect API', 2000,'red');
        });
    }


 function opan(url){
    $.get( url, function( data ) {
        $( ".result" ).html( data );
       // alert( "Load was performed." );
    });
 }
