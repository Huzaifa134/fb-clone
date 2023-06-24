import "./RightSidebar.style.css";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';

const RightSidebar = () => {
  return (
    <div className="widget">
      <div className="widget__header">
        <div className="widget__headerleft">
          <h4>Your Pages and profiles</h4>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="widget__body">
        <div className="widget__bodyOptions">
          <Avatar src="https://scontent.fkhi24-1.fna.fbcdn.net/v/t39.30808-6/301583144_385294833771576_4764489766005979915_n.jpg?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGuFNIv9OF28ykQaejiMd2ZAiSy2h_2VBwCJLLaH_ZUHM-NPQnB9MteR8ZUqfAoK_TyjGJQNsTFxJXEMS4o6NO8&_nc_ohc=w1fkDPYHvfwAX8n3ZBK&_nc_ht=scontent.fkhi24-1.fna&oh=00_AfDVlPpqks3wFRr4Fa6O-JOBVRX3MeIyZ-Fq0EfbYo3KbA&oe=649C1F16" />
          <h4>Digi E-Tech</h4>
        </div>
        <div className="widget__bodyOptions ml10">
        <NotificationsNoneIcon fontSize="medium" />
        <p>19 Notification</p>
      </div>
      <div className="widget__bodyOptions ml10">
      <AccountCircleOutlinedIcon fontSize="medium"/>
      <p>Switch into page</p>
    </div>
    <div className="widget__bodyOptions ml10">
    <CampaignOutlinedIcon fontSize="medium"/>
    <p>Create promotions</p>
  </div>
      </div>
      <hr/> <br/>
      <div className="widget__header">
      <div className="widget__headerleft">
        <h4>Contacts</h4>
      </div>
      <div className="widget__headerRight">
      <VideoCallIcon/>
      <SearchIcon/>
      <MoreHorizIcon />
      </div>
    </div>

    <div className="widget__body">
    <div className="widget__bodyOptions">
      <Avatar src="https://scontent.fkhi24-1.fna.fbcdn.net/v/t39.30808-6/310733027_631860341807158_1243896803427368652_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE5NuLYN1PLRMr5wmpRAya19cjPcEP9zHT1yM9wQ_3MdGAELTXPMzl0o0l0mg9qN8owhGKrcp6iGLULZgIgTvMe&_nc_ohc=1Liv1bYVIaAAX-xIJtF&_nc_ht=scontent.fkhi24-1.fna&oh=00_AfBtuUiIRnvF5QyEeLyGKeVdxXx0j6ZzvtMYt2whx0y8wg&oe=64938BA8" />
      <h4>Raza Manekia</h4>
    </div>
  </div>
  <div className="widget__body">
    <div className="widget__bodyOptions">
      <Avatar src="https://scontent.fkhi24-1.fna.fbcdn.net/v/t39.30808-6/327573649_733420141600027_9106754470905451653_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHypljf7iNiPwrMevE2hVgGqxTL066lJvOrFMvTrqUm83uR_onugpF6kzInI2EfXhn2y7Hd0_92ET8t_7SFdglM&_nc_ohc=imPKy9VfSUAAX_jOleg&_nc_ht=scontent.fkhi24-1.fna&oh=00_AfBqM8gV5lLRya5H_cM3QOuqXYk1kN-5Du3a4Yg1WqEeGw&oe=6494193D" />
      <h4>Hassan Ahmed</h4>
    </div>
  </div>
  <div className="widget__body">
    <div className="widget__bodyOptions">
      <Avatar src="https://scontent.fkhi24-1.fna.fbcdn.net/v/t39.30808-6/280235183_963955104311325_8678660278965328222_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGJIZpCSSzxr2sYVQxjReRzg10BXfGMmemDXQFd8YyZ6bxrfQVfk8LKR1wAkuGUZRPGWIKTJfb08ofx09QLyDCQ&_nc_ohc=CQqVAdloZWQAX-LxQfO&_nc_ht=scontent.fkhi24-1.fna&oh=00_AfA2meqMUsl7tJeLCH6xlc7XN12Po2UeKmSli0vIRx07sA&oe=64930F19" />
      <h4>Abdul Hadi</h4>
    </div>
  </div>
  <div className="widget__body">
    <div className="widget__bodyOptions">
      <Avatar src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREhITEhAQERIQEBASEBAVEBAPEBUQFRIWFhgSFRUYHCggGBolGxcVIjEhJSk3Li4uFyAzODM4NygtLisBCgoKDg0OGxAQGy0mICUyLS0rNS4tLS4tLi8rLTctLTUtLS03LS0rKy0rLS0tLS0yLS0vLTYtLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQIDBAYHBQj/xAA9EAACAgEBBgQDBQUGBwAAAAAAAQIDEQQFEiExQVEGE2FxIoGRBxQjcrEyUpKhwTNCYoKi0XN0g5OzwvD/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBQQG/8QAKREBAQACAQQBAwIHAAAAAAAAAAECAxEEEiExURNBoSIyBSNxgZHB8P/aAAwDAQACEQMRAD8A83ABoyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMcrl7hLIQ5JGB3P2MZXuT2tuMkyTTTMkbn14/yHcXFsAxeeuzMikn1J5RwkAEoAAAAAAAAAAAAAAAAAAAAAAAAQ3gnJjn+0l8yl8+n1I5TwrZZn2KAFGgAAAAAAADYqszza9jIakZY5GxVPKLyqWLgAlUAAAAAAAAAAAAAAAAAAAAAY7njD7MwSeXkvfLjjsYylaSAAISA+rsHw7qNbLFMPhTxO2WY1R9N7q/RZZ2um+y2GPxNXNv/AAVRgv8AU3kzy244+6216Nmc5xjzUHpWq+y6O6/K1U97orK4yi32bi1j34nDbV2PZRCqcuMblNPhjcvrk4WUy/xRkn7r2ZOOzHL1TZo2Yfuj5wALsQyad8TGXpfFExF9NkAF2YAAAAAAAAAAAAAAAAAAAAA1bOb9ype5cShnWkDqvBHhF62XmW70dNCWG1wlbJc4RfRLrL5Ljlr4GyNBLUX1UxeHbNRz2jzlL5RTfyPfNFpYU1wrrjuwriowj2S/V+phv2ds4nt7ek0TZe7L1FtNp4VxjCuMYQgsRhFKMUuySMoB4XXDn9u7EhqI3US4LU/i1S4vc1UIpZXulF4XPFnc6Axamrejw4STUoPtJcs+j5P0bJxvFVzxmU4r89aiiVc5QnFxnXKUZxfSUXhoxnf/AGn7GXwa2uOFZivULhlTXCMn68Nx+sYnAHRwy7seXC267ryuIXp5r5/oUMmnXH5GkZX02AAXZgAAAAAAAAAAAAAAAAAAAADBqFxXsYjPqFw9j6Hh/wAN361z8lQSrxvTnJwhl8oppNt/Lh15ozysnmtcMbl4jpvsm2XvW26lr4ao+VX/AMSaTk/dRwv+oeonzfDuyY6TT10x4uEczl+9ZLjKX1bx2WEfSObtz7suXd6fX9PXIAAzbAAA1Nfs+F1dtU1mF0XGS7NrG8uz5P3WTwraOxr6JzjZTbiuUouzypqtpP8AbUsY3WuPPqfoAG2vbcHn39NNvH2fnA2NOuHufW8caBUa6+MUoxlJWQS5YsipPHZb28vkfMgsJHQwvM5cTZO23GrAA0ZAAAAAAAAAAAAAAAAAAAAEwSbSk8RbSk+0c8X9AOn2d4FvvpjZv1V+ZFShCW9lxaynJpfDnn1/oa+zfEWp2fRdp69PFOrUTV2pcZzhGbahuvCSz8Kw2+Ka4HrSWOC4JcEvQ5nQaONmp2rpbF+HqI0Wrvi2lwlL3UoJnPm+58908O1l0k18fTvFvj8fhueFthX6iiu/W6zVSlfCNkaarPukIVy4xUnUoycsYb4rGcdMv7y8MabGN29+r1mtcv4nbkt4Tvc9JRvY3661Ral0upflT/1QfywfWFvlWTx5fDl4ajFfg6nWUvmm75apezWo3+Htg5DaniLX6PUrSz09WslOKnTOqNlMp18U24/Gk0089Fw7npZy9UfO12ov5xpqho6pdHKMnZc0+29KEH61SXQi8cc2LSZWyY3hzuyfEOv1upemhp6tE647987Y2XThDglux+FOTbWOmMvoddHw1GS/G1OsufV/eJaZe2NPucPfJpuPla+i7lDUUz0lj7Wbyspb7JtWx95xXVHUCcccyFmUtmV5fHl4Y0zWMXr1Ws1sZfxK3J8DxXsS/S6ezUaLWamLoi7J022feoSrjxnh2qUlJLL5vOMcOZ258fxfa1o74x/buh93q6/i3vyo/Ryy/RMmXyrlPHh4rK27auroVijCdkPL8yMJKDhW7Jue7ni0srg8cDc8S+FLNHGM99W1ye65qLg4y6KUcvg++f6Z7OnQRq2lp6oL4NPspqH/AH1BP3a3v5mX7QJpaG1PnKVKj7+bF/omXx3XvxmPpTLpcbqzyy/dOfP9I8nAB7XKAAAAAAAAAAAAAAAAAAADAA9d8GbX+86aOXmypKu3u2lwn/mXH3z2Md8vK2tp5ZwtXo7qcdHOmatT98NnBeDtr/ddTFyeKrPw7eyTfCb/ACv+Tkeq6nZtdtlFkt7e005TraeOMoOLT7rH6I523D6ed+K7nT7bu1T5ln/f4Xppsotssp3ZwvaldRKTh+IoqPm1zSeG4pJxaw8J5TznfW1310uoXz0z+mLSAZTZW90428onrbLI4jCdGeDlJ1u1flUHKK92+HYpRTGEVGKxGKwl/wDc/cyArcrVscJj6Y76Yzi4yWYyXFcV801xT6prii8NdZWsShO/HBSg642P8ym4xz6p8eyJAmVhlhMvaXtd9NLqH89Mvr+KaFtFl9tdt27GNDlKiiMnNKyUXHzrJtLMt1tKKWI70uL4NbwLXZVZpxl5c+o52na/3dn6dfxai9/+pyv2nbRzOrTrlBebP8zzGK+S3v4kdtrVVp5XaqyW7mquM2+ShW5uMYrq25y98pHje1ddLUXWXS4OybljtHlGPyikvkb9Pj3Zd3w8nW7OzX2fe38NUAHvccAAAAAAAAAAAAAAAAAAAAADq9geOLdPGFdsY21x3UpNtWRh148d7C5LGfU5QFcsMcpxWmvbnrvON4foFP5+pJzfgHav3jSwi3mzT4qn3wl8EvnHHHumdIcnLG42yvodeczxmU+4ACq4AAABobc2itNRbc8fhwbiu83wjH5yaRMnN4iMrMZzXlfjXas79VdHzJOqqxwrhl7icEoSaXLO8pcfU+AS23xbbb4tvm2+bZB18cZjOI+azzueVyv3AAWVAAAAAAAAAAAAAAAAAAAAAAAAdT9nGs8vWbueF1U47veUfjXzSjL6nrEZZWVyZ4bsDU+VqdPP926vP5ZS3ZfybPZpycHlcnzXqeDqsf1Suz/DsuddnxW6DDVqIy64fZmY8r3gBDeOfAgScP8AajfmiqKfD7xHPq/LsOr1Grzwj83/ALHE/aL/AGFX/ML/AMczbRP1x5urv8nJwAAOo4AAAAAAAAAAAAAAAAAAAAIlJLmzFK/siOU8MwNZ3Mq5Pu/qR3J7W2DTyQ2O47X1dnaCzUWRpqWZzzjjhRS5zk+iXf8Aq0j3FR4YlxeFn3PPPskrhnUyyvM/Cio9VXxe8veXD/Kj0U8HU592XHw7X8P1THX3fP8Apo217r9OjEbZLk2bso54M07aWvVGEr2WJ+8z/e/kjHKbfNtkAlAfO29siOrqdcpODTUoTSTcZpNZx1WG016n0QTLZeYrljMpxXkW3dj26KUY2OE42bzhOLfFRxnKa4P4lw9eZ81Xr1Oy+1Gzjpo9cXy+X4aX9focLg6GvO3GWuH1GrHDZcY2vNXf9SyknyZpg07mPa3Qa0bX3yWV77InmI7azgwK/ujNGWeQ5RZwkAEoAAAAAA153duAuszwXIxFbV5BsBElVkAkAQGySANzY2056a2F1T+KD4pv4ZRf7UJej/2fRHuGydow1NULq3mM1nHWMuThL1TyjwCHY6Dwt4nt0Mnurfqm82VN4y8Y34v+7LCXo8cejWG7V3zme3s6TqfpXjL1XtYPmbD29RrI71M8tLM638NsPzR7eq4ep9M8Fll4rs45TKcxhs06fLh+hglQ10z7G6ByXGPnNFLrYwi5SajGKcpSbwlFLLbZ9Ockk22kkm23wSS6tnlnjvxbHUryNP8A2UZZst5K1rko/wCBPjnq0unPXXjc7ww37MdWPN/s+B4l2v8Ae75WcVBJQqT5qtZw2u7bb+eOh8sgk6EnE4jhZZXK80KqXEsUguLJQs2EVk+KJYE5LRk1yKkgZ6rc8GZTTTNtPJeVTKJABKoYrp9PqZGzUbyRatjFZZ6BSLENFFwkqSAJKx6lgABGQKz7lg0RDt2Ay0XSrkpwlKE4vMZxbjJP0aPRPCXj1zlCnV43pOMa70sJybwlZFcE2/7y4ceS5nnARTPXM55a6t2Wq84vdtr7ap01crLJrEXjdjiU3LON1Lvn6dTi9pfaVvVzVFM67HhV2TcJpLPFuKfPHLms8zzxR69XzfUGWPT4z35ejZ12zL9vh9DaO3NTqFu3ai2yP7re7B+8Y4T+h85vp1IlImKwbySenjttvNSiQQ3glCSsf6k5I6AQiUhDkWAAAAZ9PLhjsYC9D4+5MRfTZABdmxXy4Y7mAtZLLKlK0k8IbI3kyxVxRCVHlFoSG72+hQC/X3Rcpz90WTAkrJZLACkZdGS+5LRCAsCERKWAJKSn2KuWQnj3AsljmWRWEerMgArJZLADCn0MkyIx4shxywJz2+pchIkAAABMXxXuQQBugweaC/LPtrEACjQAAAwz5gAWq6k2dPcACxIAAAAQYWAACIAGwAAAAAgEgAAAAAAAAAAAP//Z" />
      <h4>Who Am I</h4>
    </div>
  </div>
  <div className="widget__body">
    <div className="widget__bodyOptions">
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR52kfFnZecY42Dw_9Kek6HEXm5NHP1SHSO2f0gYfWcOc97sncnhsobwTBKxo3eCqdt0D4&usqp=CAU" />
      <h4>Caartoon</h4>
    </div>
  </div>
  <div className="widget__body">
    <div className="widget__bodyOptions">
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-a4WRHkzANIW5egd9xckf4iGpDWdDw4f4Q&usqp=CAU" />
      <h4>Tom</h4>
    </div>
  </div>

    </div>
  );
};

export default RightSidebar;
