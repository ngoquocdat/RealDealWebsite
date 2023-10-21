import { Box, Typography } from "@mui/material";
import React from "react";

export default function RealEstateRegions() {
  return (
    <div className="real-estate-regions">
      <Box
        key="real-regions-phudong"
        className="real-regions phudong"
        sx={{
          backgroundImage:
            "url(https://www.phudonggroup.com/wp-content/uploads/2022/07/SKYGARDEN_1-min.jpeg)",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{ fontWeight: 700, fontSize: "26px", paddingTop: 30 }}
          >
            Tin Bất Động Sản Phú Đông
          </Typography>
        </Box>
      </Box>
      <Box
        key="real-regions-hochiminh"
        className="real-regions hochiminh"
        sx={{
          backgroundImage:
            "url(https://www.phudonggroup.com/wp-content/uploads/2022/11/DA-BN1DA-BN17himm-lam_view-pool-_night-2015.jpg)",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "26px" }}>
            Tin Bất Động Sản Hồ Chí Minh
          </Typography>
        </Box>
      </Box>
      <Box
        key="real-regions-hanoi"
        className="real-regions hanoi"
        sx={{
          backgroundImage:
            "url(https://www.phudonggroup.com/wp-content/uploads/2022/07/Group-20.jpg)",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "26px" }}>
            Tin Bất Động Sản Hà Nội
          </Typography>
        </Box>
      </Box>
      <Box
        key="real-regions-another-1"
        className="real-regions another-1"
        sx={{
          backgroundImage:
            "url(https://www.phudonggroup.com/wp-content/uploads/2022/11/HINH-SKYONE-03.jpeg)",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "26px" }}>
            Tin Bất Động Sản Thủ Đức
          </Typography>
        </Box>
      </Box>
      <Box
        key="real-regions-another-2"
        className="real-regions another-2"
        sx={{
          backgroundImage:
            "url(https://angel-prod-public-content.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/sites/7/2023/08/LD.jpg)",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "26px" }}>
            Tin Bất Động Sản Ngoại Thành
          </Typography>
        </Box>
      </Box>
      <Box
        key="real-regions-another-3"
        className="real-regions another-3"
        sx={{
          backgroundImage:
            "url(https://angel-prod-public-content.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/sites/7/2023/08/thue-nha-quan-12.jpg)",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "26px" }}>
            Tin Bất Động Sản Khu Vực Khác
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
